export interface DentalAppointment {
    id: string;
    patientId: string;
    dentistId: string;
    date: Date;
    time: string;
    notes?: string;
}

export interface Patient {
    id: string;
    name: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
}

export interface Dentist {
    id: string;
    name: string;
    specialization: string;
    email: string;
    phone: string;
}