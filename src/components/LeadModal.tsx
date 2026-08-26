import LeadGenerationModal, { type LeadGenerationModalProps } from './brochure/LeadGenerationModal';

export type LeadModalProps = LeadGenerationModalProps;

export default function LeadModal(props: LeadModalProps) {
  return <LeadGenerationModal {...props} />;
}