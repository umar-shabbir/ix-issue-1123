import {
    IxIconButton,
    IxContentHeader,
} from '@siemens/ix-react';

export default function Home() {
  return (
    <>
      <div className="row">
        <IxContentHeader
          header-title="Ix Issue 1123"
          header-subtitle="Reproduce issue with Vitest"
        >
          <IxIconButton icon="connected" ghost variant="Primary">
            Refresh
          </IxIconButton>
          <IxIconButton icon="refresh" ghost variant="Primary">
            Refresh
          </IxIconButton>
          <IxIconButton icon="trashcan" ghost variant="Primary">
            Delete
          </IxIconButton>
          <IxIconButton icon="question" ghost variant="Primary">
            Help
          </IxIconButton>
        </IxContentHeader>
      </div>
    </>
  );
}
