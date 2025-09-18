import { useState, useRef, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import { Sparkles, UploadCloud, Wand2, Instagram, Lightbulb, Copy, ChevronLeft, Camera, Check, LucideIcon, LoaderCircle } from 'lucide-react';

// Mock data for AI photo generation
const mockAIPhotos = [
  'https://placehold.co/400x400/FFF/333?text=On+a+Minimalist+Wall',
  'https://placehold.co/400x400/EEE/555?text=In+a+Lifestyle+Setting',
  'https://placehold.co/400x400/DDD/777?text=On+a+Wooden+Table',
];

export default function Workspace() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('story');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [craftName, setCraftName] = useState('');
  const [craftDetails, setCraftDetails] = useState('');

  const [story, setStory] = useState('');
  const [socialPost, setSocialPost] = useState('');
  const [marketInsights, setMarketInsights] = useState('');
  const [generatedPhotos, setGeneratedPhotos] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(''); // For "Copied!" confirmation

  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- FUNCTIONS ---
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!craftName || !craftDetails) {
      setError("Please provide both a name and details for your craft.");
      return;
    }
    setIsLoading(true);
    setError('');
    setResultsVisible(false);

    try {
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: craftName, details: craftDetails }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();

      setStory(data.product_story);
      setSocialPost(data.social_post);
      setMarketInsights("Your craft aligns well with 'Sustainable Home Decor' and 'Boho Chic' trends. Highlighting its 'natural dyes' and 'eco-friendly' aspects could attract more buyers!");
      setGeneratedPhotos(mockAIPhotos);

      setResultsVisible(true);
      setActiveTab('story');

    } catch (err) {
      console.error("Error fetching from backend:", err);
      setError("An AI generation error occurred. Please check your backend server and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(type);
    setTimeout(() => {
      setCopiedStatus('');
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen bg-muted/40">
      <nav className="bg-background border-b sticky top-0 z-40">
         <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                   <Sparkles className="w-6 h-6 text-primary-foreground" />
                 </div>
                 <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                   CraftAI Workspace
                 </span>
            </Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Back to Home
            </Link>
        </div>
      </nav>

      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 bg-card p-6 rounded-lg border shadow-sm sticky top-24">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-card-foreground">Describe Your Creation</h2>
                <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors" onClick={() => fileInputRef.current?.click()}>
                    <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                    {imagePreview ? <img src={imagePreview} alt="Craft preview" className="mx-auto max-h-48 rounded-md" /> : <div className="space-y-2"><UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" /><p className="font-semibold text-primary">Click to upload a photo</p><p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p></div>}
                </div>
                <div>
                    <label htmlFor="craft-name" className="text-sm font-medium">Craft Name</label>
                    <input id="craft-name" type="text" value={craftName} onChange={e => setCraftName(e.target.value)} placeholder="e.g., 'Mayur' Brass Oil Lamp" className="w-full mt-1 p-2 border rounded-md bg-transparent" />
                </div>
                <div>
                    <label htmlFor="craft-details" className="text-sm font-medium">Key Details & Materials</label>
                    <textarea id="craft-details" rows={5} value={craftDetails} onChange={e => setCraftDetails(e.target.value)} placeholder="e.g., Hand-cast brass using Dhokra art..." className="w-full mt-1 p-2 border rounded-md bg-transparent" />
                </div>
                <button onClick={handleGenerate} disabled={isLoading} className="w-full flex items-center justify-center gap-2 py-3 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:bg-muted disabled:cursor-not-allowed font-semibold">
                    {isLoading ? <><LoaderCircle className="w-5 h-5 animate-spin" /> Crafting Your Story...</> : <><Wand2 className="w-5 h-5" /> Generate with AI</>}
                </button>
                {error && <p className="text-sm text-destructive text-center">{error}</p>}
            </div>
        </div>

        <div className="lg:col-span-8">
            {isLoading && (
              <div className="flex flex-col items-center justify-center text-center bg-card p-10 rounded-lg border shadow-sm h-[calc(100vh-10rem)]">
                <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
                <h3 className="text-2xl font-bold mt-4">AI is Warming Up...</h3>
                <p className="text-muted-foreground mt-2">Generating your unique marketing assets.</p>
              </div>
            )}
            
            {!isLoading && !resultsVisible && (
              <div className="flex flex-col items-center justify-center text-center bg-card p-10 rounded-lg border shadow-sm h-[calc(100vh-10rem)]">
                <div className="p-4 bg-primary/10 rounded-full mb-4"><Sparkles className="w-12 h-12 text-primary" /></div><h3 className="text-2xl font-bold">Your AI Marketing Kit Awaits</h3><p className="text-muted-foreground mt-2 max-w-md">Fill in your craft's details and let the magic begin.</p>
              </div>
            )}

            {resultsVisible && !isLoading && (
              <div className="bg-card rounded-lg border shadow-sm animate-fade-in">
                <div className="border-b flex flex-wrap">
                    <TabButton icon={Wand2} label="Product Story" tab="story" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabButton icon={Instagram} label="Social Media" tab="social" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabButton icon={Camera} label="Digital Studio" tab="studio" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabButton icon={Lightbulb} label="Market Insights" tab="insights" activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                <div className="p-6 min-h-[300px]">
                  {activeTab === 'story' && <OutputBox title="📝 Your Product Story" content={story} onCopy={() => handleCopyToClipboard(story, 'story')} isCopied={copiedStatus === 'story'} />}
                  {/* CORRECTED THIS LINE */}
                  {activeTab === 'social' && <OutputBox title="📱 Ready-to-Post for Social Media" content={socialPost} onCopy={() => handleCopyToClipboard(socialPost, 'social')} isCopied={copiedStatus === 'social'} isPreformatted={true} />}
                  {activeTab === 'studio' && <PhotoStudioBox title="🖼️ Your AI-Generated Photos" photos={generatedPhotos} originalPhoto={imagePreview} />}
                  {activeTab === 'insights' && <OutputBox title="💡 Market Insights & Tips" content={marketInsights} />}
                </div>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}

// --- TYPE DEFINITIONS for Sub-Components ---
interface TabButtonProps {
    icon: LucideIcon;
    label: string;
    tab: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}
interface OutputBoxProps {
    title: string;
    content: string;
    onCopy?: () => void;
    isPreformatted?: boolean;
    isCopied?: boolean;
}
interface PhotoStudioBoxProps {
    title: string;
    photos: string[];
    originalPhoto: string | null;
}

// --- SUB-COMPONENTS with updates ---
const TabButton = ({ icon: Icon, label, tab, activeTab, setActiveTab }: TabButtonProps) => (
  <button onClick={() => setActiveTab(tab)} className={`flex items-center gap-2 p-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-primary'}`}>
    <Icon className="w-5 h-5" /> {label}
  </button>
);

const OutputBox = ({ title, content, onCopy, isPreformatted = false, isCopied = false }: OutputBoxProps) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold">{title}</h3>
      {onCopy && (
        <button onClick={onCopy} className={`flex items-center gap-2 text-sm font-medium transition-colors ${isCopied ? 'text-green-500' : 'text-muted-foreground hover:text-primary'}`}>
          {isCopied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
        </button>
      )}
    </div>
    {isPreformatted ? <pre className="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-sans">{content}</pre> : <p className="bg-muted/50 p-4 rounded-md text-sm leading-relaxed">{content}</p>}
  </div>
);

const PhotoStudioBox = ({ title, photos, originalPhoto }: PhotoStudioBoxProps) => (
    <div className="space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">Compare your original photo with AI-enhanced lifestyle images.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {originalPhoto && (
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-center">Original</p>
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-primary">
                        <img src={originalPhoto} alt="Original craft" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}
            {photos.map((photoUrl, index) => (
                <div key={index} className="space-y-2">
                    <p className="text-sm font-semibold text-center">AI Option {index + 1}</p>
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden border">
                        <img src={photoUrl} alt={`AI generated background ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

