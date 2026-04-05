export interface Company {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  distance: string;
  image: string;
  description: string;
  phone: string;
  hours: string;
  verified: boolean;
  featured?: boolean;
}

export interface Service {
  id: string;
  companyId: string;
  name: string;
  duration: number; // minutes
  price: number;
  description: string;
  category: string;
}

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

export const COMPANIES: Company[] = [
  {
    id: "c1",
    name: "Zen Wellness Studio",
    category: "Bienestar & Spa",
    rating: 4.9,
    reviewCount: 247,
    address: "Calle Serrano 45, Madrid",
    distance: "0.3 km",
    image: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Espacio de bienestar integral con masajes, aromaterapia y meditación guiada. Un oasis de calma en el corazón de Madrid.",
    phone: "+34 91 234 5678",
    hours: "Lun–Vie 09:00–20:00 · Sáb 10:00–18:00",
    verified: true,
    featured: true,
  },
  {
    id: "c2",
    name: "Barber & Co.",
    category: "Barbería",
    rating: 4.8,
    reviewCount: 189,
    address: "Gran Vía 12, Madrid",
    distance: "0.8 km",
    image: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Barbería premium con técnicas clásicas y modernas. Cortes de precisión, afeitados tradicionales y tratamientos capilares.",
    phone: "+34 91 345 6789",
    hours: "Lun–Sáb 09:00–21:00",
    verified: true,
    featured: true,
  },
  {
    id: "c3",
    name: "Flow Yoga Studio",
    category: "Yoga & Fitness",
    rating: 4.7,
    reviewCount: 312,
    address: "Paseo de la Castellana 88, Madrid",
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Estudio de yoga con clases para todos los niveles. Vinyasa, Hatha, Yin y meditación. Profesores certificados internacionalmente.",
    phone: "+34 91 456 7890",
    hours: "Todos los días 07:00–22:00",
    verified: true,
  },
  {
    id: "c4",
    name: "Lumière Beauty",
    category: "Peluquería & Estética",
    rating: 4.6,
    reviewCount: 156,
    address: "Calle Fuencarral 78, Madrid",
    distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Salón de belleza especializado en coloración, tratamientos capilares y cuidado personal. Expertos en color y corte contemporáneo.",
    phone: "+34 91 567 8901",
    hours: "Mar–Sáb 10:00–19:30",
    verified: false,
  },
  {
    id: "c5",
    name: "Sonrisa Dental",
    category: "Salud & Dental",
    rating: 4.9,
    reviewCount: 423,
    address: "Calle Alcalá 200, Madrid",
    distance: "2.1 km",
    image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=800",
    description: "Clínica dental con tecnología de última generación. Odontología general, estética, ortodoncia y blanqueamiento profesional.",
    phone: "+34 91 678 9012",
    hours: "Lun–Vie 08:00–20:00 · Sáb 09:00–14:00",
    verified: true,
  },
];

export const SERVICES: Service[] = [
  // Zen Wellness
  { id: "s1", companyId: "c1", name: "Masaje Relajante 60min", duration: 60, price: 65, description: "Masaje sueco de cuerpo completo para liberar tensiones y promover la relajación profunda.", category: "Masaje" },
  { id: "s2", companyId: "c1", name: "Aromaterapia Premium", duration: 90, price: 90, description: "Sesión completa de aromaterapia con aceites esenciales seleccionados y masaje suave.", category: "Aromaterapia" },
  { id: "s3", companyId: "c1", name: "Meditación Guiada", duration: 45, price: 35, description: "Sesión de meditación guiada para reconectar con tu bienestar interior.", category: "Meditación" },
  { id: "s4", companyId: "c1", name: "Ritual Zen Completo", duration: 120, price: 130, description: "Experiencia holística: masaje + aromaterapia + meditación. El lujo del bienestar total.", category: "Pack" },
  // Barber
  { id: "s5", companyId: "c2", name: "Corte Clásico", duration: 30, price: 25, description: "Corte de cabello clásico con tijera y/o máquina. Incluye lavado y secado.", category: "Corte" },
  { id: "s6", companyId: "c2", name: "Afeitado Tradicional", duration: 45, price: 35, description: "Afeitado con navaja clásica, paño caliente y productos premium.", category: "Afeitado" },
  { id: "s7", companyId: "c2", name: "Corte + Barba", duration: 60, price: 50, description: "Pack completo: corte de cabello y arreglo/diseño de barba.", category: "Pack" },
  // Yoga
  { id: "s8", companyId: "c3", name: "Clase de Yoga (Individual)", duration: 60, price: 40, description: "Sesión individual de yoga adaptada a tu nivel y necesidades específicas.", category: "Yoga" },
  { id: "s9", companyId: "c3", name: "Vinyasa Flow", duration: 75, price: 20, description: "Clase grupal de yoga Vinyasa con secuencias fluidas y dinámicas.", category: "Yoga" },
  { id: "s10", companyId: "c3", name: "Meditación & Mindfulness", duration: 45, price: 15, description: "Clase grupal de meditación y técnicas de mindfulness para la vida diaria.", category: "Meditación" },
  // Beauty
  { id: "s11", companyId: "c4", name: "Corte & Peinado", duration: 60, price: 45, description: "Corte personalizado según tu tipo de cabello y estilo de vida. Incluye lavado.", category: "Corte" },
  { id: "s12", companyId: "c4", name: "Coloración Completa", duration: 120, price: 95, description: "Coloración de cabello completa con productos de alta gama sin amoníaco.", category: "Color" },
  { id: "s13", companyId: "c4", name: "Balayage & Highlights", duration: 150, price: 130, description: "Técnica de coloración manual para un efecto natural y luminoso.", category: "Color" },
  // Dental
  { id: "s14", companyId: "c5", name: "Revisión y Limpieza", duration: 45, price: 55, description: "Revisión completa + limpieza dental profesional con ultrasonidos.", category: "General" },
  { id: "s15", companyId: "c5", name: "Blanqueamiento LED", duration: 60, price: 180, description: "Blanqueamiento dental profesional con tecnología LED de última generación.", category: "Estética" },
];

export const APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    companyId: "c1",
    companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s1",
    serviceName: "Masaje Relajante 60min",
    date: "2026-03-05",
    time: "11:00",
    duration: 60,
    price: 65,
    status: "confirmed",
    notes: "Por favor, usar aceite de lavanda",
    providerName: "Laura Méndez",
  },
  {
    id: "a2",
    companyId: "c2",
    companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s7",
    serviceName: "Corte + Barba",
    date: "2026-03-10",
    time: "16:30",
    duration: 60,
    price: 50,
    status: "pending",
    providerName: "Carlos Ruiz",
  },
  {
    id: "a3",
    companyId: "c3",
    companyName: "Flow Yoga Studio",
    companyImage: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s8",
    serviceName: "Clase de Yoga (Individual)",
    date: "2026-02-20",
    time: "09:00",
    duration: 60,
    price: 40,
    status: "completed",
    providerName: "Ana Torres",
  },
  {
    id: "a4",
    companyId: "c4",
    companyName: "Lumière Beauty",
    companyImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s12",
    serviceName: "Coloración Completa",
    date: "2026-02-15",
    time: "11:30",
    duration: 120,
    price: 95,
    status: "cancelled",
    providerName: "María López",
  },
  {
    id: "a5",
    companyId: "c5",
    companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s14",
    serviceName: "Revisión y Limpieza",
    date: "2026-03-15",
    time: "10:00",
    duration: 45,
    price: 55,
    status: "confirmed",
    providerName: "Dr. Pablo García",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todos", icon: "🔍" },
  { id: "spa", label: "Spa", icon: "🌿" },
  { id: "barberia", label: "Barbería", icon: "✂️" },
  { id: "yoga", label: "Yoga", icon: "🧘" },
  { id: "belleza", label: "Belleza", icon: "💅" },
  { id: "dental", label: "Dental", icon: "🦷" },
  { id: "medico", label: "Médico", icon: "🩺" },
];

export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "16:00", "16:30", "17:00",
  "17:30", "18:00", "18:30", "19:00",
];

export const PROVIDER_STATS = {
  todayAppointments: 6,
  weekRevenue: 840,
  pendingRequests: 3,
  totalClients: 128,
  rating: 4.8,
  completionRate: 96,
};

export const PROVIDER_APPOINTMENTS: Appointment[] = [
  // ── Confirmadas (10) ─────────────────────────────────────────
  {
    id: "pa1", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s1", serviceName: "Masaje Relajante 60min",
    date: "2026-04-06", time: "09:00", duration: 60, price: 65, status: "confirmed", providerName: "Laura Méndez",
  },
  {
    id: "pa2", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s7", serviceName: "Corte + Barba",
    date: "2026-04-06", time: "10:30", duration: 60, price: 50, status: "confirmed", providerName: "Carlos Ruiz",
  },
  {
    id: "pa3", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s2", serviceName: "Aromaterapia Premium",
    date: "2026-04-06", time: "12:00", duration: 90, price: 90, status: "confirmed", providerName: "Laura Méndez",
  },
  {
    id: "pa4", companyId: "c3", companyName: "Flow Yoga Studio",
    companyImage: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s8", serviceName: "Clase de Yoga Individual",
    date: "2026-04-06", time: "14:00", duration: 60, price: 40, status: "confirmed", providerName: "Ana Torres",
  },
  {
    id: "pa4b", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s6", serviceName: "Afeitado Tradicional",
    date: "2026-04-06", time: "15:30", duration: 45, price: 35, status: "confirmed", providerName: "Carlos Ruiz",
  },
  {
    id: "pa4c", companyId: "c5", companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s14", serviceName: "Revisión y Limpieza",
    date: "2026-04-06", time: "17:30", duration: 45, price: 55, status: "confirmed", providerName: "Dr. Pablo García",
  },
  {
    id: "pa5", companyId: "c5", companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s14", serviceName: "Revisión y Limpieza",
    date: "2026-04-07", time: "09:30", duration: 45, price: 55, status: "confirmed", providerName: "Dr. Pablo García",
  },
  {
    id: "pa6", companyId: "c4", companyName: "Lumière Beauty",
    companyImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s11", serviceName: "Corte & Peinado",
    date: "2026-04-07", time: "11:00", duration: 60, price: 45, status: "confirmed", providerName: "María López",
  },
  {
    id: "pa7", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s3", serviceName: "Meditación Guiada",
    date: "2026-04-07", time: "17:00", duration: 45, price: 35, status: "confirmed", providerName: "Laura Méndez",
  },
  {
    id: "pa8", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s5", serviceName: "Corte Clásico",
    date: "2026-04-08", time: "09:00", duration: 30, price: 25, status: "confirmed", providerName: "Carlos Ruiz",
  },
  {
    id: "pa9", companyId: "c3", companyName: "Flow Yoga Studio",
    companyImage: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s9", serviceName: "Vinyasa Flow",
    date: "2026-04-08", time: "11:30", duration: 75, price: 20, status: "confirmed", providerName: "Ana Torres",
  },
  {
    id: "pa10", companyId: "c5", companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s15", serviceName: "Blanqueamiento LED",
    date: "2026-04-08", time: "16:00", duration: 60, price: 180, status: "confirmed", providerName: "Dr. Pablo García",
  },
  // ── Pendientes (6) ───────────────────────────────────────────
  {
    id: "pb1", companyId: "c4", companyName: "Lumière Beauty",
    companyImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s12", serviceName: "Coloración Completa",
    date: "2026-04-06", time: "09:00", duration: 120, price: 95, status: "pending", providerName: "María López",
  },
  {
    id: "pb2", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s4", serviceName: "Ritual Zen Completo",
    date: "2026-04-06", time: "14:00", duration: 120, price: 130, status: "pending", providerName: "Laura Méndez",
  },
  {
    id: "pb3", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s6", serviceName: "Afeitado Tradicional",
    date: "2026-04-07", time: "10:00", duration: 45, price: 35, status: "pending", providerName: "Carlos Ruiz",
  },
  {
    id: "pb4", companyId: "c3", companyName: "Flow Yoga Studio",
    companyImage: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s10", serviceName: "Meditación & Mindfulness",
    date: "2026-04-07", time: "18:00", duration: 45, price: 15, status: "pending", providerName: "Ana Torres",
  },
  {
    id: "pb5", companyId: "c5", companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s14", serviceName: "Revisión y Limpieza",
    date: "2026-04-08", time: "09:00", duration: 45, price: 55, status: "pending", providerName: "Dr. Pablo García",
  },
  {
    id: "pb6", companyId: "c4", companyName: "Lumière Beauty",
    companyImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s13", serviceName: "Balayage & Highlights",
    date: "2026-04-08", time: "15:00", duration: 150, price: 130, status: "pending", providerName: "María López",
  },
  // ── Canceladas (7) ───────────────────────────────────────────
  {
    id: "pc1", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s1", serviceName: "Masaje Relajante 60min",
    date: "2026-04-06", time: "11:00", duration: 60, price: 65, status: "cancelled", providerName: "Laura Méndez",
  },
  {
    id: "pc2", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s5", serviceName: "Corte Clásico",
    date: "2026-04-06", time: "13:00", duration: 30, price: 25, status: "cancelled", providerName: "Carlos Ruiz",
  },
  {
    id: "pc3", companyId: "c3", companyName: "Flow Yoga Studio",
    companyImage: "https://images.unsplash.com/photo-1636632202905-e740e830189e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbSUyMG9jZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s8", serviceName: "Clase de Yoga Individual",
    date: "2026-04-07", time: "09:00", duration: 60, price: 40, status: "cancelled", providerName: "Ana Torres",
  },
  {
    id: "pc4", companyId: "c5", companyName: "Sonrisa Dental",
    companyImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZW50YWwlMjBjbGluaWMlMjBjbGVhbiUyMG1vZGVybnxlbnwxfHx8fDE3NzIzMjQwODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s15", serviceName: "Blanqueamiento LED",
    date: "2026-04-07", time: "12:00", duration: 60, price: 180, status: "cancelled", providerName: "Dr. Pablo García",
  },
  {
    id: "pc5", companyId: "c4", companyName: "Lumière Beauty",
    companyImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcyMzI0MDg0fDA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s12", serviceName: "Coloración Completa",
    date: "2026-04-07", time: "16:00", duration: 120, price: 95, status: "cancelled", providerName: "María López",
  },
  {
    id: "pc6", companyId: "c1", companyName: "Zen Wellness Studio",
    companyImage: "https://images.unsplash.com/photo-1763978485095-1cd13f4d3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBzcGElMjB3ZWxsbmVzcyUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s2", serviceName: "Aromaterapia Premium",
    date: "2026-04-08", time: "10:00", duration: 90, price: 90, status: "cancelled", providerName: "Laura Méndez",
  },
  {
    id: "pc7", companyId: "c2", companyName: "Barber & Co.",
    companyImage: "https://images.unsplash.com/photo-1622629217819-892db897f01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwbW9kZXJuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjQwODN8MA&ixlib=rb-4.1.0&q=80&w=400",
    serviceId: "s7", serviceName: "Corte + Barba",
    date: "2026-04-08", time: "17:30", duration: 60, price: 50, status: "cancelled", providerName: "Carlos Ruiz",
  },
];
