import React, { useState } from "react";
import { toast } from "react-toastify";
import QuizSection from "../Landing/QuizSection";
import PlansComponent from "./PlansComponent";
import ProductsComponent from "../products/ProductsComponent";
import { planDetails, productData } from "../../assets/Data";
import ProductSummaryComponent from "../products/ProductSummaryComponent";

const SelectKitsPlans = () =>
{
    const [currentStep, setCurrentStep] = useState('products');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState({});

    const handleSelectPlan = (plan) =>
    {
        setSelectedPlan(plan);
    };

    const selectProducts = (products) =>
    {
        setSelectedProducts(products);
    };

    const isSelected = (plan) => selectedPlan === plan;

    const next = () =>
    {
        if (currentStep === 'products')
        {
            if (Object.values(selectedProducts).some(count => count > 0))
            {
                setCurrentStep('plans');
            } else
            {
                toast.error("Please select at least one product.");
            }
        } else if (currentStep === 'plans')
        {
            if (selectedPlan)
            {
                setCurrentStep('summary');
            } else
            {
                toast.error("Please select a plan.");
            }
        }
    };

    const goBack = () =>
    {
        switch (currentStep)
        {
            case 'products':
                setCurrentStep('quiz');
                break;
            case 'plans':
                setCurrentStep('products');
                break;
            case 'summary':
                setCurrentStep('plans');
                break;
            default:
                break;
        }
    };

    switch (currentStep)
    {
        case 'quiz':
            return <QuizSection />;
        case 'products':
            return <ProductsComponent selectProducts={selectProducts} selectedProducts={selectedProducts} goBack={goBack} next={next} />;
        case 'plans':
            return <PlansComponent handleSelectPlan={handleSelectPlan} isSelected={isSelected} setIsPlans={setCurrentStep} update={next} goBack={goBack} />;
        case 'summary':
            return (
                <ProductSummaryComponent
                    selectedProducts={selectedProducts}
                    selectedPlan={selectedPlan}
                    productData={productData}
                    planDetails={planDetails}
                    onBack={goBack}
                />
            );
        default:
            return null;
    }
};

export default SelectKitsPlans;
