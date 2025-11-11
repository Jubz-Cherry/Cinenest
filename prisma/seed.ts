import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.movies.createMany({
    data: [
      { title: 'Matrix', genre: 'Ação e ficção científica', rating: 8.7 },
      { title: 'Interestelar', genre: 'Ficção científica e drama', rating: 8.6 },
      { title: 'O Poderoso Chefão', genre: 'Crime e drama', rating: 9.2 },
      { title: 'A Origem', genre: 'Ficção científica e ação', rating: 8.8 },
      { title: 'Clube da Luta', genre: 'Drama e suspense', rating: 8.8 },
      { title: 'Telefone preto 2', genre: 'Terror e suspense', rating: 8.5 },
      { title: 'Jurassic Park', genre: 'Aventura e ficção científica', rating: 8.1 },
      { title: 'Demon Slayer: Castelo infinito', genre: 'Anime, ação e aventura', rating: 7.8 }, 
      { title: 'Os Vingadores', genre: 'Ação e aventura', rating: 8.0 },
    ],
  });
}


main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
