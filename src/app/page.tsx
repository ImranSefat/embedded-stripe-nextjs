import ProButton from "@/components/PaymentButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-semibold">Stripe Embedded Payment</h1>
      <ProButton />
    </main>
  );
}
