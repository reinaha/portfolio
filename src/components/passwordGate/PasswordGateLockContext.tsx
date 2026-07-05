import { createContext, useContext } from 'react';

// Lets a PortfolioMajorSection know it's currently rendering inside a locked
// PasswordGate's blurred preview, so it can skip registering itself with the
// section dot-nav — that content isn't actually reachable yet.
const PasswordGateLockContext = createContext(false);

export const PasswordGateLockProvider = PasswordGateLockContext.Provider;

export const useIsInsideLockedPasswordGate = () => useContext(PasswordGateLockContext);
