import supabase from '../../connection/supabaseConnection'


const Select_guards_basic_data = async (objectCity: string | undefined, specialization: number | undefined, searchValue: string) => {
    const { data, error } = await supabase 
        .from('Guards')
        .select('id, licence_number, full_name, city, specialization')
        .eq('city', objectCity)
        .eq('specialization', specialization)
        .like('full_name', "%"+searchValue+"%");
        
    if (error) throw error.message;
    return data
}

const Select_duties = async (objectId: number | undefined) => {
    const { data, error } = await supabase 
        .from('Duty_schedule')
        .select('id, object_id, guard_id, start_date, end_date, shift_length')
        .eq('object_id', objectId);
        
    if (error) throw error.message;
    return data
}


const SelectGuardsData = {
    Select_guards_basic_data,
    Select_duties
};

export default SelectGuardsData
