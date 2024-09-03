import { ToolStack as BaseToolStack } from '@rstack-dev/doc-ui/tool-stack';
import styles from './ToolStack.module.scss';
import { useLang, useI18n } from 'rspress/runtime';

export function ToolStack() {
  const t = useI18n<typeof import('i18n')>();
  const lang = useLang();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('toolStackTitle')}</h2>
        <p className={styles.desc}>{t('toolStackDesc')}</p>
      </div>
      <BaseToolStack lang={lang === 'zh' ? 'zh' : 'en'} />
    </div>
  );
}
