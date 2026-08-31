import type {
  ApplicationSubmission,
  ApplicationSubmitResponse,
} from '~/types/application';

/**
 * Frontend-only submission boundary.
 *
 * Replace this implementation with the production HTTP client
 * once the external application API contract is available.
 */
export async function submitApplicationPreview(
  submission: ApplicationSubmission,
): Promise<ApplicationSubmitResponse> {
  await new Promise(resolve => setTimeout(resolve, 700));

  const referenceSuffix =
    submission.clientSubmissionId
      .replaceAll('-', '')
      .slice(-5)
      .toUpperCase()
    || String(Date.now()).slice(-5);

  return {
    reference: `NMR-DEMO-${referenceSuffix}`,
    receivedAt: submission.submittedAt,
    status: 'preview-received',
  };
}
