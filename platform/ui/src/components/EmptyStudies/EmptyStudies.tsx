import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import Icon from '../Icon';
import Typography from '../Typography';

// TODO: Add loading spinner to OHIF + use it here.
const EmptyStudies = ({ className = '' }) => {
  const { t } = useTranslation('StudyList');
  return (
    <div className={classnames('inline-flex flex-col items-center', className)}>
      <img
        src="/assets/images/empty_logo.png"
        alt={t('Nenhum registro encontrado')}
        className="mb-4"
      />
      <Typography
        className="text-white"
        variant="h5"
      >
        {t('Nenhum registro encontrado')}
      </Typography>
    </div>
  );
};

EmptyStudies.propTypes = {
  className: PropTypes.string,
};

export default EmptyStudies;
