
import { Service, FAQItem } from './types';

export const COMPANY_NAME = "Towson Pump Pros";
export const PHONE_NUMBER = "(844) 340-6413";
export const ADDRESS = "400 Washington Ave, Towson, MD 21204";

export const SERVICES: Service[] = [
  {
    id: 'ejector-replacement',
    title: 'Ejector Pump Replacement',
    description: 'Old pump failing? We provide fast, same-day replacements using heavy-duty cast iron units built to last.',
    icon: 'fa-tools'
  },
  {
    id: 'basement-pump',
    title: 'Basement Bathroom Pumps',
    description: 'Specializing in adding and maintaining pumps for basement additions. Ensure your new bathroom stays dry and functional.',
    icon: 'fa-restroom'
  },
  {
    id: 'grinder-fix',
    title: 'Grinder Pump Fix',
    description: 'Is your grinder pump alarm going off? We clear jams, fix cutting blades, and repair high-pressure systems.',
    icon: 'fa-triangle-exclamation'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I know if I have an ejector pump or a sump pump?",
    answer: "A sump pump basin usually only has water and a single discharge pipe. An ejector pump basin is sealed airtight, has two pipes (discharge and vent), and handles waste from toilets or sinks."
  },
  {
    question: "What is a 'Grinder Pump Fix'?",
    answer: "A grinder pump fix often involves clearing a jam in the cutting blades or replacing a faulty float switch. If the motor has burned out, a full replacement is recommended."
  },
  {
    question: "Can I replace the pump myself?",
    answer: "Because these systems handle raw sewage and require airtight venting to prevent sewer gas leaks, we highly recommend professional installation to meet Maryland plumbing codes."
  },
  {
    question: "When should I replace my ejector pump?",
    answer: "If your pump is over 10 years old, or you hear loud clanging noises during operation, it is safer to replace it before a total failure causes a basement flood."
  }
];
