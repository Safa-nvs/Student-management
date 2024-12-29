const jsonServer=require('json-server')
const Studserver=jsonServer.create()

const middileware=jsonServer.defaults()
const route=jsonServer.router('st.json')

const PORT=3000 || process.env.PORT
Studserver.use(middileware)
Studserver.use(route)

Studserver.listen(PORT,()=>{
    console.log(`studnnt management server running at ${PORT} and 
        waiting for client request`);
    
})