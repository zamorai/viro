import supabase from "../../../utils/supabase"

export default async function selectStage(user, category) {
    console.log(user, category)
    if (!user?.user) {
      return ['preResponse', 'registrar']
    } 

    const { data: results } = await supabase.from(category).select('stage').eq('id', user.user.id).single()
    const { data: profile, error } = await supabase
    .from('profiles')
    .select('birth')
    .eq('id', user.user.id)
    .single()

    if (results?.stage) {
      switch (results.stage) {
        case 1:
          return ['coreResponse', null]
        case 2:
          return ['postResponse', null]
        case 3: 
          return ['address', null]
        case 4:
          return ['checkout', null]
        case 5:
          return ['final', null]
        default:
          break;
      }
    }
    console.log(profile)
    if (profile?.birth) {
      return ['preResponse', 'finalizar']
    } else {
      return ['preResponse', 'extra']
    }
}

// cases
// preResponse | stage: 0, subStage: [registrar, extra, finalizar]
// coreResponse | stage: 1
// postResponse | stage: 2,
// 