import { IArrayExpr, IExprContext, IExpr } from './types';

export function resolve(context: IExprContext, expr: IExpr): unknown {
  if (isResponsible(expr)) {
    return context.prng.pick(expr.map((v) => context.resolve(v)));
  }

  throw new Error('Error during expression processing.');
}

export function isResponsible(expr: any): expr is IArrayExpr<unknown> {
  return Array.isArray(expr) && expr.length > 0;
}
