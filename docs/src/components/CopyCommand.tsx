import { useState, useEffect } from "react"
import { useCopyToClipboard } from "@uidotdev/usehooks"
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"

interface Props {
  command: string
}

export const CopyCommand = ({ command }: Props) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [hasCopiedText, setHasCopiedText] = useState<boolean>(
    Boolean(copiedText),
  )

  const copyCommand = () => {
    copyToClipboard(command)
    setHasCopiedText(true)
  }

  useEffect(() => {
    if (hasCopiedText) {
      const timeout = setTimeout(() => {
        setHasCopiedText(false)
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [hasCopiedText, copyToClipboard])

  return (
    <div className="border border-neutral-500 bg-neutral-800 text-white relative flex rounded select-none">
      <pre className="p-4">
        <code>{command}</code>
      </pre>
      {hasCopiedText ? (
        <div className="p-4 ml-auto">
          <CheckIcon className="w-6 h-6 text-green-500" />
        </div>
      ) : (
        <button onClick={copyCommand} className="p-4 ml-auto">
          <ClipboardDocumentIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
