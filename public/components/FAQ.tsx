import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";

export function FAQ() {
  const faqs = [
    {
      question: "How long does it take to integrate AL&GO with my store?",
      answer: "Integration typically takes 1–2 weeks depending on your current setup. Our technical team will work closely with you to ensure a smooth transition with minimal disruption to your business operations."
    },
    {
      question: "Is technical support available?",
      answer: "Yes, we provide 24/7 technical support for all clients. Our dedicated support team is available via live chat, phone, and email to help you with any questions or issues you may encounter."
    },
    {
      question: "What payment methods does AL&GO support?",
      answer: "AL&GO supports all major payment methods including credit/debit cards, digital wallets (Apple Pay, Google Pay), and local payment systems. We ensure PCI DSS compliance for all transactions."
    },
    {
      question: "Can AL&GO work with my existing POS system?",
      answer: "Absolutely! AL&GO is designed to integrate seamlessly with most modern POS systems. Our technical team will assess your current setup and provide a custom integration plan."
    },
    {
      question: "What kind of analytics and insights do you provide?",
      answer: "Our platform provides comprehensive real-time analytics including customer behavior patterns, peak shopping times, popular products, transaction volumes, and revenue insights to help optimize your business strategy."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 30-day free trial for new customers. This includes full access to our platform, integration support, and customer service to help you evaluate how AL&GO can benefit your business."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl lg:text-5xl text-primary mb-6">
            Frequently asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about AL&GO and how it can transform your business.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-primary">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}