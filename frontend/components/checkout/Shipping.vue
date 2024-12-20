<template>
  <form
    @submit.prevent="onSubmit"
    class="d-flex ga-4 w-100"
    :class="isMobile && 'flex-column'"
  >
    <ShippingCustomerFormFields :is-loading="isLoading" />
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { prepareCheckoutDataBeforePayment } from "~/utils/checkout";
import { useDisplay } from "vuetify";

import {
  checkoutSchema,
  checkoutTypedSchema,
  type CheckoutSchemaValues,
} from "~/utils/validation/shipping-schema";
const {
  updateCart,
  addShippingMethod,
  createPaymentSession,
  shippingMethods,
  isUpdatingCart,
  isAddingShippingMethod,
  isCreatingPaymentSession,
  isFetchingCart,
} = useCart();
const { mobile: isMobile } = useDisplay({ mobileBreakpoint: "md" });
const { snackbar } = useSnackbar();

const initialShippingMethod = computed<CheckoutSchemaValues["shippingMethod"]>(() => {
  return {
    methodId: shippingMethods.value[0]?.id || "0",
    price: shippingMethods.value[0]?.price_incl_tax || 0,
  };
});

const form = useForm({
  validationSchema: checkoutTypedSchema,
  initialValues: {
    shippingCustomerType: "individual",
    billingCustomerType: "individual",
    shippingMethod: initialShippingMethod.value,
  },
});

const isCreatingPaymentMethodDelayed = ref(false);

const isLoading = computed(() => {
  return (
    isUpdatingCart.value ||
    isAddingShippingMethod.value ||
    isCreatingPaymentSession.value ||
    isCreatingPaymentMethodDelayed.value ||
    isFetchingCart.value
  );
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    const parsedData = checkoutSchema.safeParse(values);

    if (!parsedData.success) return;
    const { shippingMethod, ...rest } = parsedData.data;

    const preparedData = prepareCheckoutDataBeforePayment(rest);

    await updateCart(preparedData);
    await addShippingMethod(shippingMethod.methodId);

    // TODO: remove this after testing (for now it's needed as there is some race condition in the backend https://github.com/medusajs/medusa/issues/6331) maybe 2 second needs to be added
    isCreatingPaymentMethodDelayed.value = true;
    setTimeout(async () => {
      await createPaymentSession();

      isCreatingPaymentMethodDelayed.value = false;

      navigateTo("/checkout/payment");
    }, 1000);
  } catch (error) {
    snackbar.error("Something went wrong!");
  }
});
</script>
