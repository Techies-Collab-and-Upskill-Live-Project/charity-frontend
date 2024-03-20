import React, { useState } from "react";
import PlusIcon from "../assets/icons/add.png";
import MinusIcon from "../assets/icons/minus.png"; // Ensure you have a minus icon in your assets

function FrequentlyAsked() {
  // State to track the currently expanded item
  const [expandedItem, setExpandedItem] = useState(null);

  // Array of dummy questions and answers
  const faqItems = [
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, donations are tax-deductible to the full extent allowed by law. Please consult your tax advisor for more information.",
    },
    {
      question: "What percentage of my donation goes directly to the cause?",
      answer:
        "90% of your donation goes directly to the cause, ensuring maximum impact on the ground.",
    },
    {
      question: "Can I start a fundraising campaign for your organization?",
      answer:
        "Absolutely! We welcome fundraising campaigns by our supporters. Please visit our website for resources and guidelines.",
    },
    {
      question:
        "Do you accept in-kind donations or only monetary contributions?",
      answer:
        "We accept both in-kind donations and monetary contributions. Each form of support is invaluable to our mission.",
    },
    {
      question: "Can I specify where my donation goes?",
      answer:
        "Yes, you can specify where you would like your donation to go, and we will ensure it is allocated according to your wishes.",
    },
    {
      question:
        "How can I stay updated on your organization's activities and impact?",
      answer:
        "Subscribe to our newsletter and follow us on social media to stay updated on our activities and impact.",
    },
  ];

  // Function to toggle FAQ item expansion
  const toggleExpansion = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null); // Close the item if it's already expanded
    } else {
      setExpandedItem(index); // Expand the new item
    }
  };

  return (
    <div className="bg-white w-full">
      <div className="container mx-auto w-full">
        <div className="py-6 lg:py-12 mx-auto">
          <div className="text-center">
            <h3>Frequently Asked Questions</h3>
            <p className="ga font-thin mt-3 mb-3">
              Have a question that is not answered? You can contact us at
            </p>
            <a href="/home" className="text-[#04A38A] font-semibold">
              support@donationtrace.com
            </a>
          </div>

          <div className="mx-12 mt-10 max-sm:mx-3">
            {faqItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="flex justify-between mb-5 max-sm:mb-5 max-sm:mt-5"
                  onClick={() => toggleExpansion(index)}
                >
                  <h5 className="font-medium">{item.question}</h5>
                  <img
                    src={expandedItem === index ? MinusIcon : PlusIcon}
                    alt="Icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                {expandedItem === index && (
                  <div className="mb-5">
                    <p>{item.answer}</p>
                  </div>
                )}
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAsked;
