import { Modal } from 'antd';
import React from 'react';

export default function ExperienceModal({
  visible,
  onCancel,
  title,
  description
}: ExperienceModalProps) {
  return (
    <Modal title={title} centered visible={visible} footer={[]} onCancel={onCancel}>
      <p>{description}</p>
    </Modal>
  );
}

type ExperienceModalProps = {
  visible: boolean;
  onCancel: () => void;
  title: string;
  description: string;
};
