/* ---------------------------------------------------------------
   DATA CORE — must load BEFORE any file in /stories/, and before engine.js.
   Declares the shared containers that each story file populates via
   STORY_PACKS['id'] = {...} and STORY_ORDER.push('id').
--------------------------------------------------------------- */
const STORY_PACKS = {};
const STORY_ORDER = [];
