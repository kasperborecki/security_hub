import supabase from '../../connection/supabaseConnection'


const Select_guards_basic_data = async (objectCity: string | undefined, specialization: number | undefined) => {
    const { data, error } = await supabase 
        .from('Guards')
        .select('id, full_name, city, specialization')
        .eq('city', objectCity)
        .eq('specialization', specialization);
        
    if (error) throw error.message;
    return data
}


const SelectGuardsData = {
    Select_guards_basic_data
};

export default SelectGuardsData
