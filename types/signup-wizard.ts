export type AccountType = 
  | "stagiaire" 
  | "candidat" 
  | "particulier" 
  | "freelance" 
  | "professionnel" 
  | "vendeur" 
  | "administrateur";

export type BillingPeriod = "monthly" | "yearly" | "twoYears";

export interface AccountTypeOption {
  id: AccountType;
  name: string;
  description: string;
  monthlyPrice: number | null; // null pour administrateur
  imageUrl: string;
}

export interface BillingPlan {
  id: BillingPeriod;
  name: string;
  badge: string;
  monthsCount: number;
  discount: number; // montant de réduction
}

export interface WizardFormData {
  // Étape 1
  accountType: AccountType | null;
  
  // Étape 2
  billingPeriod: BillingPeriod;
  calculatedPrice: number;
  
  // Étape 3
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Étape 4
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  subscribeNewsletter: boolean;
}

export interface WizardErrors {
  accountType?: string;
  billingPeriod?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
}
