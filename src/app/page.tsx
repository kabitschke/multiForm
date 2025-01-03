import { FormProvider } from "@/contexts/formContext";
import { Router } from "@/router";


export default function Home() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>


  );
}
