import cld from '../utils/cloudinary';

export const books = [
  {
    id: 'b0',
    genre: 'Sci-fi',
    binding: 'Hardcover',
    price: 24.99,
    description: 'Exploring what the future holds — in space or beyond.',
    img: cld.image('book0'),
  },
  {
    id: 'b1',
    genre: 'LitRPG',
    binding: 'Hardcover',
    price: 16.95,
    description: 'A level system in a novel, like playing a video-game.',
    img: cld.image('book1'),
  },
  {
    id: 'b2',
    genre: 'Romantasy',
    binding: 'Hardcover',
    price: 19.95,
    description: 'Love and steamy action — with elves and vampires.',
    img: cld.image('book2'),
  },
  {
    id: 'b3',
    genre: 'Epic',
    binding: 'Hardcover',
    price: 32.95,
    description: 'Heroic tales across sprawling high-fantasy worlds',
    img: cld.image('book3'),
  },
  {
    id: 'b4',
    genre: 'Cozy',
    binding: 'Hardcover',
    price: 18.95,
    description: 'Stories that warm your heart with a touch of light magic',
    img: cld.image('book4'),
  },
  {
    id: 'b5',
    genre: 'Dystopian',
    binding: 'Hardcover',
    price: 24.95,
    description: 'Worlds falling apart, and the last of humanity.',
    img: cld.image('book5'),
  },
  {
    id: 'b6',
    genre: 'Literary',
    binding: 'Hardcover',
    price: 29.95,
    description: 'The most beautiful prose in imaginary realms.',
    img: cld.image('book6'),
  },

  {
    id: 'b7',
    genre: 'Horror',
    binding: 'Hardcover',
    price: 22.95,
    description: 'Speculative fiction meets your worst nightmares.',
    img: cld.image('book7'),
  },
];
