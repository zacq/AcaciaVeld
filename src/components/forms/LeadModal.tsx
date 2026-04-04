"use client";

import Modal from "@/components/ui/Modal";
import LeadForm, { type LeadFormSource } from "@/components/forms/LeadForm";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  source: LeadFormSource;
  prefilledInterest?: string;
}

export default function LeadModal({ open, onClose, title, source, prefilledInterest }: LeadModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={title ?? "Get in Touch"}>
      <LeadForm source={source} prefilledInterest={prefilledInterest} onSuccess={onClose} />
    </Modal>
  );
}
