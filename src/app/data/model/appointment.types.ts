export interface Appointment {
  id: string;
  companyId: string;
  companyName: string;
  companyImage: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: "confirmed" | "completed" | "cancelled" | "pending";
  notes?: string;
  providerName: string;
}
