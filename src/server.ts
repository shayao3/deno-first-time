import { app, get } from 'https://denopkg.com/syumai/dinatra/mod.ts';

app(get('/hello', () => 'hello'));
