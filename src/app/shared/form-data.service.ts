import { Injectable, signal } from '@angular/core';

export interface SafetyData {
  safetyAnswer?: 'yes' | 'no';
}

export interface YourDetailsData {
  title?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  previousLastName?: 'yes' | 'no';
  preferredName?: 'yes' | 'no';
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  tfn?: string;
  csrn?: 'yes' | 'no';
  crn?: 'yes' | 'no';
  hadCase?: 'yes' | 'no';
}

export interface IncomeData {
  // Add income form fields as needed
}

export interface FormData {
  safety: SafetyData;
  yourDetails: YourDetailsData;
  income: IncomeData;
}

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private formDataSignal = signal<FormData>({
    safety: {},
    yourDetails: {},
    income: {}
  });

  // Safety data methods
  setSafetyData(data: SafetyData) {
    this.formDataSignal.update(current => ({
      ...current,
      safety: { ...current.safety, ...data }
    }));
  }

  getSafetyData() {
    return this.formDataSignal().safety;
  }

  // Your details data methods
  setYourDetailsData(data: YourDetailsData) {
    this.formDataSignal.update(current => ({
      ...current,
      yourDetails: { ...current.yourDetails, ...data }
    }));
  }

  getYourDetailsData() {
    return this.formDataSignal().yourDetails;
  }

  // Income data methods
  setIncomeData(data: IncomeData) {
    this.formDataSignal.update(current => ({
      ...current,
      income: { ...current.income, ...data }
    }));
  }

  getIncomeData() {
    return this.formDataSignal().income;
  }

  // Get all form data
  getAllFormData() {
    return this.formDataSignal();
  }

  // Clear all form data
  clearAllData() {
    this.formDataSignal.set({
      safety: {},
      yourDetails: {},
      income: {}
    });
  }
} 