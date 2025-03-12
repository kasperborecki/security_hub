 export interface Objects{
    id: number;
    streat: string;
    streat_number: string;
    zip_code: string;
    city: string;
    object_name: string;
    owner: string;
    contact_number: string;
    start_date: string;
    end_date: string;
    is_full_day: boolean;
    start_hour?: string;
    end_hour?: string;
    object_round: boolean;
    number_of_rounds?: number;
    hour_rate?: number;
    body_guard_specialization: number;
 }