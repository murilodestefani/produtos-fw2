import User from '../../components/User';
import { UserProvider } from '../../context/user';

export function Usuario() {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
}
