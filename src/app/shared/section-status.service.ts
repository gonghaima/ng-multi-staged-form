import { Injectable, signal } from '@angular/core';

export type SectionStatus =
  | 'notStarted'
  | 'complete'
  | 'inProgress'
  | 'cannotStart'
  | 'notRequired';

@Injectable({ providedIn: 'root' })
export class SectionStatusService {
  private sectionStatusSignal = signal<Record<string, SectionStatus>>({
    whatYouNeedToKnow: 'notStarted',
    eligibility: 'cannotStart',
    safety: 'cannotStart',
    yourDetails: 'cannotStart',
    income: 'cannotStart',
    reviewAndSubmit: 'cannotStart',
  });

  getStatus(key: string) {
    return this.sectionStatusSignal()[key];
  }

  setStatus(key: string, status: SectionStatus) {
    this.sectionStatusSignal.update((current) => ({
      ...current,
      [key]: status,
    }));
  }

  getAll() {
    return this.sectionStatusSignal();
  }

  sectionStatus = this.sectionStatusSignal.asReadonly();
}
