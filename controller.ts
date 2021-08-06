import { connect } from "https://deno.land/x/redis/mod.ts";

const redis = await connect({
    hostname: "redis-service-composed",
    port: 6379
  });

const getAllKeys = async (
    { params, request, response }: {
      params: {keyname: string},
      request: any,  
      response: any }) => {

        response.body =  {
            key: "yes",
            value: "no"
        };
}

  const getKey = async (
      { params, request, response }: {
        params: {keyname: string},
        request: any,  
        response: any }) => { 
    
    try {

        // const redis = await connect({
        //     hostname: "redis-server",
        //     port: 6379
        //   });

        console.log('incomming request');

        console.log(redis.isConnected)

        const fuga = await redis.get(params.keyname);
        
        response.body =  {
            key: params.keyname,
            value: fuga
        };

    } catch (err) {
        console.error(`failed to receive frame: ${err}`);
        response.body =  {
            error: err
        };
    }
}

export {
    getKey as getKey,
    getAllKeys as blah
}