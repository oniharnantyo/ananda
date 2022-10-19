import { Col, Row, Typography } from 'antd';

import { FormSectionProps } from './FormSection.types';

const { Title } = Typography;

const FormSection: FormSectionProps = ({ title, form }) => {
  return (
    <section className="mb-3">
      <Row>
        <Col>
          <Title level={3}>{title}</Title>
        </Col>
      </Row>
      {form}
    </section>
  );
};

export default FormSection;
