import { FC } from 'react';
import styles from './styles.module.scss';
import { IPage } from './types';

const Page: FC<IPage> = () => {
  return (
    <>
      <div className={styles.container}>Profile ID</div>
    </>
  );
};

export default Page;
