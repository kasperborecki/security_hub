import supabase from '../../connection/supabaseConnection'


const Insert_duty = async (objectId: number | undefined, guardId: number | undefined, startDate: string , endDate: string) => {
    const { data, error } = await supabase 
        .from('Duty_schedule')
        .insert([
            {
                object_id: objectId,
                guard_id: guardId,
                start_date: startDate,
                end_date: endDate,
            }
        ]);
    if (error) throw error.message;
    return data
}


const InsertGuardsData = {
    Insert_duty,
};

export default InsertGuardsData
