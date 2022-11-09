export const { data, error } = await supabase
  .from('cities')
  .insert([{ name: 'The Shire', country_id: 554 }])