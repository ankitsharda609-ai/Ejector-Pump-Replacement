
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DiagnosticStep {
  role: 'user' | 'assistant';
  text: string;
}
