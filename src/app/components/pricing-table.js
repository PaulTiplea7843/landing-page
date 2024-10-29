import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/card"; // Componente ShadCN

export default function PricingTable() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Start for free and upgrade to unlock more features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Plan Gratuit */}
        <Card className="border border-gray-200">
          <CardHeader>
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-4xl font-bold mt-2">$0</p>
            <p className="text-gray-600">/ month</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>Access to basic features</li>
              <li>Limited AI assistance</li>
              <li>Community support</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        {/* Plan Premium */}
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader>
            <h3 className="text-xl font-semibold">Premium</h3>
            <p className="text-4xl font-bold mt-2">$3</p>
            <p className="text-gray-600">/ month</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>All features included</li>
              <li>Full AI assistance</li>
              <li>Priority support</li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
