import { Router } from 'https://deno.land/x/oak/mod.ts'

import { blah, getKey } from './controller.ts'; 

const router = new Router();

router
  .options("/key")
  .get("/key", blah)
  .get("/key/:keyname",  getKey)

export default router;