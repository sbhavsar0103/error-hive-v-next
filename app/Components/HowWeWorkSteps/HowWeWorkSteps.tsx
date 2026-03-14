import { useState } from 'react';
import { MessageCircle, Wrench, Settings, Cloud, Zap } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    icon: <MessageCircle className="w-6 h-6" />,
    description: 'We begin with an in-depth discussion to understand your business goals, challenges, existing infrastructure, and vision of your idea to develop.',
    details: 'During this phase, our team conducts comprehensive interviews with key stakeholders to gather all necessary information. We analyze your current systems, identify pain points, and create a detailed requirements document that serves as the foundation for your project.'
  },
  {
    id: 2,
    title: 'Strategic Planning & Design',
    icon: <Wrench className="w-6 h-6" />,
    description: 'Our experts create a comprehensive roadmap and architecture for your solution.',
    details: 'We develop detailed technical specifications, design mockups, and a project timeline. Our team creates wireframes and prototypes to visualize the solution before development begins, ensuring alignment with your vision.'
  },
  {
    id: 3,
    title: 'Development & Iteration',
    icon: <Settings className="w-6 h-6" />,
    description: 'We build your solution using industry best practices and agile methodologies.',
    details: 'Our development team works in iterative sprints, regularly delivering features for your review. We maintain open communication through daily standups and weekly progress meetings to ensure the project stays on track.'
  },
  {
    id: 4,
    title: 'Deployment & Launch',
    icon: <Cloud className="w-6 h-6" />,
    description: 'We deploy your solution to production with comprehensive testing and quality assurance.',
    details: 'Before launch, we conduct thorough testing including unit tests, integration tests, and user acceptance testing. We prepare deployment documentation and execute a smooth rollout to production environments.'
  },
  {
    id: 5,
    title: 'Post-Launch Support & Optimization',
    icon: <Zap className="w-6 h-6" />,
    description: 'We provide ongoing support and continuously optimize your solution for peak performance.',
    details: 'We monitor system performance, gather user feedback, and implement improvements. Our team provides 24/7 support and regular optimization updates to ensure your solution remains efficient and secure.'
  }
];

export default function HowWeWorkSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <section className="relative bg-[#060010] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5">
            Process
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How We Build{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Custom Software
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A structured and agile-driven development approach designed to deliver scalable, secure, and high-performance software solutions.
          </p>
        </div>

        {/* Timeline Icons */}
        <div className="mb-16">
          <div className="relative grid grid-cols-5 mb-5">
            <div className="absolute top-8 left-0 w-full h-[2px] bg-amber-500/20" />
            {steps.map((step) => (
              <div key={step.id} className="relative flex justify-center z-10">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                    ${activeStep === step.id
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-110"
                      : "bg-[#0a001b] text-gray-400 border border-amber-500/20"
                    }`}
                >
                  {step.icon}
                </button>
              </div>
            ))}
          </div>

          {/* Step Titles */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`text-sm sm:text-base font-medium transition-colors duration-300 w-full
                    ${activeStep === step.id
                      ? "text-amber-500"
                      : "text-gray-400 hover:text-amber-500"
                    }`}
                >
                  {step.title}
                </button>
              </div>
            ))}
          </div>

        </div>
        {/* Active Step Card */}
        {activeStepData && (
          <div className="bg-gradient-to-br from-[#0a001b] to-[#100022] rounded-3xl p-10 sm:p-10 border border-amber-500/10 shadow-xl shadow-black/40 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Step {activeStepData.id}:{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {activeStepData.title}
                </span>
              </h3>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {activeStepData.details}
            </p>

            <div className="mt-8 pt-6 border-t border-amber-500/10">
              <p className="text-gray-400 italic">
                {activeStepData.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}