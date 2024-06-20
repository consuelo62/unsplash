import Image from 'next/image';
import { Basic } from 'unsplash-js/dist/methods/users/types';

import './styles/ownerUser.css';

type Props = {
  user: Basic;
};

export default function OwnerUser({ user }: Props) {
  return (
    <div className="owner_user">
      <Image
        src={user.profile_image.large}
        alt="Unsplash user image"
        width={50}
        height={50}
      />
      <span>{user.name}</span>
    </div>
  );
}
