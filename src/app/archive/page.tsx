import { getAllPoems } from "@/lib/poems";
import { ArchiveClient } from "@/components/ArchiveClient";

export default async function ArchivePage() {
    const poems = await getAllPoems();

    return <ArchiveClient initialPoems={poems} />;
}
