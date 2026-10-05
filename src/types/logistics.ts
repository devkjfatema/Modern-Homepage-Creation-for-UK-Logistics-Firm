export type VehicleId = 'small' | 'swb' | 'lwb' | 'luton';

export interface Vehicle {
  id: VehicleId;
  name: string;
  length: number;
  width: number;
  height: number;
  payload: number;
  pallets: number;
  fits: string;
  bestFor: string;
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  tag: string;
}

export interface Destination {
  city: string;
  time: string;
  service: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  text: string;
  meta: string;
}