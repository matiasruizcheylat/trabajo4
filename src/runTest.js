console.log("TEST CORRIENDO");

const assert=require('chai').assert;
const app= require('./index');
const request= require('supertest');




/** test 1  devuelve ruta de usuarios read */
it('responde la lista de usuarios', AA =>{

   request(app).get('/users')
   .set('Accept','application/json')
   .expect('Content-Type', /html/)
   .expect(200, AA);

});


/** test 2  devuelve a terminator id:13 */
it('responde un usuario solo que existe', BB =>{
   
   request(app).get('/users/detalle/13')
   .set('Accept','application/json')
   .expect('Content-Type', /html/)
   .expect(200, BB);

});






//TESTS Create:::
/* Este usuario es posteado porque no existe va afuncionar siempre que Diabolico no exista */
describe("POST /users/agregando", () =>{

   
  it('responde con 201 usuario creado!!', CC =>{
     const data={
        id:666,
        username: 'Diabolico',
        password:'666diab',
        firstName:'Satan',
        lastName:'Lucifer',
        email:'satan@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
     }
     request(app).
     post('/users/agregando').
     send(data)
     .set('Accept','application/json')
     .expect('Content-Type', /json/)
     .expect(201)
     .end(err => {
        if(err) return CC(err);
        CC();
     })
  });



  it('elimina al diablo 666', DD =>{

   request(app).get('/users/borrando/666')
   .set('Accept','application/json')
   .expect('Content-Type', /json/)
   .expect(200, DD);
   });
   


});


