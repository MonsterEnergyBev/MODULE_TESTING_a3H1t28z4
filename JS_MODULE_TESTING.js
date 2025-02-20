
//import {agentKeel} from "./MODULE_TYPE_HTML.html"
//console.log(agentKeel)

//debug list:

  //❌maybe js file hierarcy
  
  //❌can u only export to 1 other "module js file" at a time? can u only import

import {plank,boosted} from "../EXPORTS/MODS/MOD_2.js"
console.log(plank)
console.log(boosted)

//export variable declaration

  //Single Export Declaration
    import {glassPants, metalname} from "./EXPORTS/MAIN/AUTHORIZED.js"
    console.log(glassPants)

  //Multiple export Declaration
    import {passcode} from "./EXPORTS/MAIN/AUTHORIZED.js"
    import {SecurityMax} from "./EXPORTS/MAIN/AUTHORIZED.js"
    console.log(passcode)
    console.log(SecurityMax)

  //Exporting from "multiple Js files"
    import {shark} from "./RANDOM/SHELL.js"
    import {gta5} from "./RANDOM/WANTED.js"
    console.log(shark)
    console.log(gta5)

  //🧲importing the same "external declaration" multiple times error

    //🧲import {patchBlock} from "./RANDOM/WANTED.js"
    //🧲import {patchBlock} from "./RANDOM/WANTED.js"

  //Exporting & importing between "module js files"
  
    import {secondMod} from "./EXPORTS/MODS/MOD_2.js"
    console.log(secondMod)
    
    import {goldChest} from "./EXPORTS/MODS/MOD_3.js"
    console.log(goldChest)

  //🧲exporting declarations to above module js files from the export "js module file" 
  
    //🧲export let action = "execute"
    //🧲import { action } from "./MODULE_JS_FILE.js";
    
  //importing multiple "declartions" at a time

    import {tac,toe,tic} from "./EXPORTS/GROUP/MULTI_DECLARATION_EXPORT.js"    
    console.log(toe)
    console.log(tic)
    console.log(tac)

    //🧲importing non-existing export declartion

      //🧲import {bro} from "./EXPORTS/GROUP/MULTI_DECLARATION_EXPORT.js"

  //import curly brackets can be empty (even if the "reference relative path js file" has not export declaratins lol)

  //Renaming "imported Declarations"

    import { metalname as firename,bombSquad } from "./EXPORTS/MAIN/AUTHORIZED.js"
    console.log(firename)
    console.log(metalname)

    console.log(bombSquad)

    //import renamed declaration from a "export as syntax"

    import {light} from "./EXPORTS/MAIN/AUTHORIZED.js"
    console.log(light)

  //import all syntax

    import * as farm from "./IMPORT_ALL/DECLARATIONS.js"
    console.log(farm.rent)
    console.log(farm.house)
    console.log(farm.land)

  //importing default

    import frontier from "./EXPORTS/MAIN/AUTHORIZED.js"
    console.log(frontier)

    //import custom name default export

      import taxMan from "./EXPORTS/MODS/MOD_3.js"
      console.log(taxMan)
      
      import TaxTable from "./EXPORTS/MODS/MOD_3.js"
      console.log(TaxTable)

    //importing raw default export data type values

      import xray from "./EXPORTS/MODS/MOD_2.js"
      console.log(xray[2])

    //importing multi export with "default export"

      import audio, {jesterNet} from "./EXPORTS/DEFAULT/MULTI_DEFAULT_EXPORTING.js"
      audio("left","right")
      console.log(jesterNet)
      
      //renaming the "default export name" of "default"
      
        import {default as jetbean,killerBean} from "./DEFAULT/DEFAULT_NAME.js"
        console.log(jetbean)
        console.log(killerBean)
        
      //trying to rename "default export default name" with "*asterisk" but won't allow u

        import * as ClayMoon from "./DEFAULT/DEFAULT_EXPORT_NAMING.js"
        console.log(ClayMoon.default[0])
        console.log(ClayMoon.lightTears)

    //importin a "conggreted export"

      import {RexCorp} from "./EXPORTS/FOLLOW/CONGREGATION.js"
      console.log(RexCorp)

      //all congretate export asterisk

        import * as beach from "./EXPORTS/FOLLOW/ALL_CONGREGATE.js"
        console.log(beach.party.Seafish)
        console.log(beach.party.flare)
        console.log(beach.party.grill)

    //import Unlinked Js files declrations

      import {agentSilence} from "./UNLINKED_ONLY_JS_FILES/UNLINKED_JS_FILE.js"
      console.log(agentSilence)
  
    //import external js files...linked to other "html files"

      import {events as chaos} from "./OUTER/EXTERNAL_MODULES/EXTERNAL_JS_FILE.js"
      console.log(chaos)

      //import external module js files...linked to other "html files"

        import { otherLand } from "./OUTER/EXTERNAL_MODULES/EXTERNAL_MODULE_JS_FILE.js"
        console.log(otherLand)


