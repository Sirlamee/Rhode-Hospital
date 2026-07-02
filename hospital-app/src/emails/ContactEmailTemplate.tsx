import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact message from {name}: {subject}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerLabel}>MEDCARE HOSPITAL</Text>
            <Heading style={headerHeading}>New Contact Message</Heading>
          </Section>

          {/* Meta */}
          <Section style={section}>
            <Row>
              <Column>
                <Text style={metaLabel}>From</Text>
                <Text style={metaValue}>{name}</Text>
              </Column>
              <Column>
                <Text style={metaLabel}>Email</Text>
                <Text style={metaValue}>{email}</Text>
              </Column>
            </Row>
            <Row style={{ marginTop: "12px" }}>
              <Column>
                <Text style={metaLabel}>Phone</Text>
                <Text style={metaValue}>{phone}</Text>
              </Column>
              <Column>
                <Text style={metaLabel}>Subject</Text>
                <Text style={metaValue}>{subject}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Message */}
          <Section style={section}>
            <Text style={metaLabel}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent via the contact form on medcarehospital.ng.
              Reply directly to this email to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */
const body: React.CSSProperties = {
  backgroundColor: "#f0f6ff",
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "0 auto",
  overflow: "hidden",
  border: "1px solid #e2eaf5",
};

const header: React.CSSProperties = {
  backgroundColor: "#0f2340",
  padding: "28px 36px",
};

const headerLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.18em",
  color: "#4a90d9",
  margin: "0 0 6px",
  textTransform: "uppercase",
};

const headerHeading: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 700,
  color: "#ffffff",
  margin: 0,
  letterSpacing: "-0.02em",
};

const section: React.CSSProperties = {
  padding: "24px 36px",
};

const metaLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#4a90d9",
  margin: "0 0 4px",
};

const metaValue: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#0f172a",
  margin: 0,
};

const messageText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#334155",
  whiteSpace: "pre-wrap",
  margin: 0,
  backgroundColor: "#f8fafc",
  border: "1px solid #e2eaf5",
  borderRadius: "8px",
  padding: "16px",
};

const divider: React.CSSProperties = {
  borderColor: "#e2eaf5",
  margin: "0 36px",
};

const footer: React.CSSProperties = {
  padding: "16px 36px 24px",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  color: "#94a3b8",
  lineHeight: "1.6",
  margin: 0,
};
