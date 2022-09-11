import { con } from './connection.js';

export async function Login(email, senha) {
    
  const comando = 
  `select id_administrador  id,
  DS_email        email
  from tb_Adm
  where DS_email = ?,
  and DS_senha = ?
  `;

  const [linha] = await con.query(comando, [email, senha])
  return linha [0];

}