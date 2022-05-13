import { client, checkError } from './client';

export async function signIn(email, password){
  const { user } = await client.auth.signIn({ email, password });

  return user;
}

export async function signUp(email, password){
  const { user } = await client.auth.signUp({ email, password });
  
  return user;
}

export async function getUser(){ 
  return client.auth.session;
}

export async function getBooks(){
  const response = await client
    .from('books')
    .select('*');

  return checkError(response);
}

export async function getBookById(id){
  const response = await client
    .from('books')
    .select('*')
    .match({ id })
    .single();

  return checkError(response);
}

export async function updateBook(book, id){
  const response = await client
    .from()
    .select('*')
    .match({ id })
    .update(book);

  return checkError(response);
}

export async function createBook(book){
  const response = await client
    .from('books')
    .insert([book]);

  return checkError(response);
}

export async function deleteBook(id){
  const response = await client
    .from('books')
    .delete()
    .match({ id });

  return checkError(response);
}

export async function logout(){
  await client.auth.signOut();

  return window.location.href = '../';
}