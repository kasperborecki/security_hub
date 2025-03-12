import supabase from '../../connection/supabaseConnection'


const Select_objects = async () => {
    const { data, error } = await supabase 
        .from('Objects')
        .select('id, streat,  streat_number, zip_code, city, object_name, owner, contact_number, start_date, end_date, is_full_day, start_hour, end_hour, object_round, number_of_rounds, hour_rate, body_guard_specialization');
        
    if (error) throw error.message;
    return data
}


const SelectObjectsData = {
    Select_objects
};

export default SelectObjectsData
